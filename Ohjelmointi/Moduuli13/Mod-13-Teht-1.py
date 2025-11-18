from flask import Flask, request

app = Flask(__name__)


@app.route('/alkuluku/<number>')
def alkuluku(number):
    number = int(number)
    prime = True
    for x in range(2, number):
        if number % x == 0:
            prime = False
            break

    vastaus = {
        "Number": number,
        "isPrime": prime
    }

    return vastaus


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)
