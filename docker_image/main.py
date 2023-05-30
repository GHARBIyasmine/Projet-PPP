from fastapi import FastAPI
from database import SessionLocal, engine, Base
from model1 import NetFlow
from model2 import Historique
import pandas as pd
from sqlalchemy.orm import sessionmaker
from predict import *
app = FastAPI()
Base.metadata.create_all(bind=engine)
Session = sessionmaker(bind=engine)




@app.get("/netflow/predict/{netflow_id}")
async def get_netflow_data(netflow_id: int):
    session = Session()
    netflow_row = session.query(NetFlow).filter_by(id=netflow_id).first()

    if netflow_row:
        row_dict = netflow_row.__dict__
        row_dict.pop('_sa_instance_state', None)
        p=str(prediction(row_dict))
        src=str(row_dict["srcip"])
        dst=str(row_dict["dstip"])
        ser=str(row_dict["service"])

        historique_instance = Historique(srcip=str(row_dict["srcip"]), dstip=row_dict["dstip"], service=str(row_dict["service"]), state=p)
        session.add(historique_instance)
        session.commit()
        session.close()
        return {
           "srcip":src,
           "dstip":dst,
           "service":ser,
           "state":p
        }
    
    session.close()
    return None 
@app.get("/get/historique")
async def get_historique():
    session = Session()
    historique = session.query(Historique).all()
    session.close()
    return historique





   



