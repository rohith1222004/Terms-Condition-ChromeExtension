from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = ''

@app.route("/get", methods=['POST'])
def helloWorld():
    ans = request.get_json()
    text = ans.get('text')
    response = {'message':'text successful','text':text}
    finalText = response['text']
    print(response['text'])

    # completion = openai.Completion.create(
    # model ="",
    # prompt=finalText)

    print(finalText)
    # print(completion)
    # return completion
    return jsonify(finalText)

app.run(debug=True, port=8001)