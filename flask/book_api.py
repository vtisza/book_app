#!flask/bin/python
from flask import Flask
from flask import jsonify
from flask.ext.cors import CORS, cross_origin
import book_title_reader as btr

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
#app.config['JSON_AS_ASCII'] = False
book_list=btr.load_book()

@app.route('/ac=<string:pat>')
@cross_origin()
def autocomplete(pat):
    result=btr.title_search(book_list,pat,nr=10)
    #encode="<head><meta charset='latin1'></head> "
    #result=str(result)
    return(jsonify(result))
    #return(encode+result)

if __name__ == '__main__':
    app.run(debug=True)
