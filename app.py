from flask import Flask, redirect, render_template, url_for


app = Flask(__name__)

@app.route('/')
def index():
    return redirect(url_for('hearthidle'))


@app.route('/HearthIdle')
def hearthidle():
    return render_template('index.html', 
                            url=url_for('elwynn'), 
                            url4=url_for('badlands'), 
                            url2=url_for('westfall'), 
                            url3=url_for('wetlands'),
                            homeurl=url_for('hearthidle'))

@app.route('/Badlands')
def badlands():
    return render_template('badlands.html', homeurl=url_for('hearthidle'))


@app.route('/ElwynnForest')
def elwynn():
    return render_template('elwynn.html', homeurl=url_for('hearthidle'))


@app.route('/WestFall')
def westfall():
    return render_template('westfall.html', homeurl=url_for('hearthidle'))


@app.route('/Wetlands')
def wetlands():
    return render_template('wetlands.html', homeurl=url_for('hearthidle'))




if __name__ == '__main__':
    app.run(debug=True)