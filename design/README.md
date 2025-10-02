USIU First-Year Companion

This project is a simple web-based orientation tool designed for first-year students at USIU. It provides quick access to essential information such as a weekly study planner, theme customization, and embedded media resources. The main purpose of the project is to act as a digital companion that helps new students adjust more easily to campus life. While it is primarily intended for first-year students, it may also be useful for mentors or staff involved in student orientation.

To run the project locally without Docker simply open the index.html file in the public folder using any modern web browser. 

For running with Docker: 

1. Build the image with the command 
    docker build -t debbiewambui/usiu-first-year-companion .  

2. Run the container 
docker run --rm -p 8080:80 debbiewambui/usiu-first-year-companion 

3. Once running, the project will be available at http://localhost:8080. 

Currently, the project has some limitations such as relying on prompt() for interactions instead of more user-friendly forms. Future improvements may include replacing these prompts with structured forms, adding more interactive elements, and refining the design for a smoother user experience.

Deliverables

1. Live GitHub pages URL:
2. GitHub repository link URL:
3. Published docker image URL: 
