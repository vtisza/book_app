import numpy as np
import pandas as pd
import ast

def load_book():
    books=pd.read_csv("mybookreadersbookspage2.csv")
    books=books.groupby("mybook_name")[["user_link","rating"]].count().reset_index().sort_values("user_link",ascending=False).reset_index(drop=True)
    book_list=books.mybook_name.tolist()
    return(book_list)

def title_search(book_list,pattern,nr=10):
    result=[]
    pattern=str.lower(pattern)
    for row in book_list:
        if pattern in str.lower(row):
            result.append(row)
            if len(result)==nr:
                break
    return(result)
