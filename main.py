import webapp2
import os
import jinja2

the_jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class Main(webapp2.RequestHandler):
    def get(self):
        template = the_jinja_environment.get_template("index.html")
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/', Main)
], debug=True)
