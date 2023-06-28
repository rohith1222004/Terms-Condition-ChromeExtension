import json 
f = open("./TermsAndConditions.jsonl", encoding='utf8')
f2 = open("./data.jsonl", 'w+', encoding='utf8')
for x in f:
  data = json.loads(x)
  string = '{{"prompt" : "{sent}", "completion" : "{lev}"}} \n'
#   f2.write(
#     "{" + '"prompt":' + '"' + data['sentence'] + '"' + " + ","} \n"
#     )

  f2.write(string.format(sent = data['sentence'], lev = data['unfairness_level']))
  print(data['sentence'])