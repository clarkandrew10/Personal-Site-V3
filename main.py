
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app

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
class Links(webapp2.RequestHandler):
    def get(self):
        template = the_jinja_environment.get_template("links.html")
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write(template.render())
class Home(webapp2.RequestHandler):
    def get(self):
        template = the_jinja_environment.get_template("home.html")
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write(template.render())
class Cody(webapp2.RequestHandler):
    def get(self):
        template = the_jinja_environment.get_template("../work/cody.html")
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write(template.render())
class About(webapp2.RequestHandler):
    def get(self):
        template = the_jinja_environment.get_template("about.html")
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write(template.render())
class NotFoundPageHandler(webapp.RequestHandler):
    def get(self):
        template = the_jinja_environment.get_template("404.html")
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write(template.render())
        # self.error(404)
        # self.response.out.write('<Your 404 error html page>')
        
app = webapp2.WSGIApplication([
    ('/', Main),
    ('/home', Home),
    ('/about', About),
    ('/links', Links),
    ('/work/cody', Cody),
    ('/.*', NotFoundPageHandler)
], debug=True)
