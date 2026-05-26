from enum import Enum
from abc import ABC,abstractmethod
import time
class CREDITCARD(Enum):
     MASTERCARD = "MASTERCARD"
     VISA       = "VISA"
     AMERICANEXPRESS = "AMERICANEXPRESS"
class CheckVlaidationOfUser:
     def __init__(self):
        self.credit = None
          
     def check_validation_of_credit(self,KIND:str):
          time.sleep(1)
          match KIND:
               case CREDITCARD.MASTERCARD.value:
                  self.credit = KIND
               case CREDITCARD.VISA.value:    
                  self.credit = KIND
               case CREDITCARD.AMERICANEXPRESS.value:
                  self.credit = KIND     
               case _:
                  self.credit = KIND 
                  raise ValueError("INVALID CREDIT CARD...")  
                  
          print(f"user credit{[self.credit]} is valid......")
          return self
     def validate_pin(self,p:int):
           if p == 2431745:
              time.sleep(1)
              return 4000  
           raise ValueError("INVALID PIN")    
class Operation(ABC):
    @abstractmethod
    def withdraw(self,mount:int):pass
    @abstractmethod    
    def deposit(self,mount:int):pass
    @abstractmethod    
    def transfer(self,destenation):pass
    @abstractmethod
    def exit():pass
        
class ATM(Operation):
        T = "TRANSACTION SUCCSESSFUL...."
        
        def __init__(self,pin:int,creditK:str):
             self.__balance = 0
             self.__process = CheckVlaidationOfUser()
             try:
                self.__balance = self.__process.check_validation_of_credit(creditK).validate_pin(pin)
             except ValueError:
                print(f"the credit not supported {[ self.__process.credit ]}")     
                print(f"only this >>>>\n1-- {CREDITCARD.MASTERCARD.value}\n2-- {CREDITCARD.VISA.value}\n3-- {CREDITCARD.MASTERCARD.value} ")
             except Exception as e:
                print(f"THE TRANSACTION IS CANCEL [TRY AGAIN]{e}")   

        def withdraw(self,mount:int):
            if mount > self.__balance:
                print(f"there is no enough balance to draw")
            else:
                self.__balance -= mount
                print(self.T)
                print(f"CURRENT BALANCE \n {self.__balance} ")
        def deposit(self,mount:int):
            if mount > 0 :
                 self.__balance += mount
                 print(self.T)
        def transfer(self,destenation):
            print(self.T)
        def exit(self):
            print(self.T)   



if __name__ == "__main__":
    atm = ATM(2431745,"VISA")
    atm.withdraw(10)