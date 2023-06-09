from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import data_required

class CreateCookbookForm(FlaskForm):
    name = StringField('Cookbook Name', validators=[data_required()])
    submit = SubmitField('Submit')
