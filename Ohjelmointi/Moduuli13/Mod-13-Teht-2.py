import json

from flask import Flask, request
import mysql.connector

app = Flask(__name__)


@app.route('/airport/<icao>')
def select_airport(icao):
    sql = f"SELECT ident as 'ICAO', name as 'Name', municipality as 'Municipality' FROM airport WHERE ident = '{icao}';"
    # print(sql)
    cursor = connection.cursor(dictionary=True)
    cursor.execute(sql)
    raw = cursor.fetchall()
    print(raw[0])
    result = json.dumps(raw[0])
    return result


connection = mysql.connector.connect(
    host='127.0.0.1',
    port=3306,
    database='flight_game',
    user='dbuser',
    password='password',
    autocommit=True)

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)
