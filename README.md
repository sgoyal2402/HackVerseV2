# OS-Simulator

The OS-Simulator project was built by a team of 10 students from NITK, Surathkal, in partial fulfilment of the Operating Systems course (CS252) offered by the CSE Department.

The simulator implements the following features:
1. System Calls
2. Process Scheduling Algorithms
3. Disk Scheduling Algorithms
4. Memory Allocation Algorithms
5. File Allocation Methods
6. Page Replacement Algorithms
7. Banker's Algorithm for Deadlock Avoidance
8. Deadlock Detection using Resource Allocation Graph

In supplement to the above features, the following acccessories are also present:
1. Wiki pages, which have documentation for the 8 features listed above.
2. Terminal, which provides a similar interface as the Linux Terminal or Windows Command Prompt.
3. Team section, which contains the list of the members who have contributed to this project.

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

### Team Members
```bash
Manas Trivedi                   181CO231
Mohammed Rushad                 181CO232
Mudavath Prathyusha             181CO233
Nandan MK                       181CO234
Nihar Kormbadka Gundyadka Rai   181CO235
Nishtha Kumari                  181CO236
Omanshu Mahawar                 181CO237
Pasumarthi Kushwanth            181CO238
Pranav Vighneshwar Kumar        181CO239
Priyash Bhattarai               181CO240
```
