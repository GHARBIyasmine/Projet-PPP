from sqlalchemy.sql.expression import null
from database import Base
from sqlalchemy import Column, String, Float, Integer, Numeric

class Historique(Base):
    __tablename__ ='historique'
    id = Column(Integer, primary_key=True, autoincrement=True)
    srcip=Column(String)
    dstip=Column(String)
    service=Column(String)
    state=Column(String)