from flask import Flask, render_template

app = Flask(__name__)


# PAGE D'ACCUEIL
@app.route("/")
def home():
    return render_template("index.html")


# PAGE À PROPOS
@app.route("/about")
def about():
    return render_template("about.html")


# PAGE DES SERVICES
@app.route("/services")
def services():
    return render_template("services.html")


# PAGE DES RÉALISATIONS
@app.route("/projects")
def projects():
    return render_template("projects.html")


# PAGE DE CONTACT
@app.route("/contact")
def contact():
    return render_template("contact.html")


# PAGE D'ERREUR 404 (avec le menu et le style du site)
@app.errorhandler(404)
def page_not_found(error):
    return render_template("404.html"), 404


# LANCEMENT EN LOCAL (en ligne, c'est gunicorn qui démarre le site)
if __name__ == "__main__":
    app.run(debug=False)