# OS-Simulator

## Install components
```bash
sudo apt-get update
sudo apt-get install python-pip 
```

### Setting up Virtual Environment and Install Requirements
```bash
sudo pip install virtualenv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Running the website locally
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

