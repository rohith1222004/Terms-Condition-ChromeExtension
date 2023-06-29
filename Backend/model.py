from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = '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'

@app.route("/get", methods=['POST'])
def helloWorld():
    ans = request.get_json()
    text = ans.get('tempText')
    print(text)

    completion = openai.Completion.create(
    # model ="ada:ft-personal-2023-06-28-05-18-30",
    model ="davinci:ft-personal-2023-06-28-14-12-41",
    prompt=text)

    print(completion)
    return jsonify(completion)

if __name__ == '__main__':
   app.run(debug = True, port =8001)