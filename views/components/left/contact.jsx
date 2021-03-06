import React from 'react';

class Contact extends React.Component{

    render() {
        return  <div className="contact" title="See ahrgomez's github account">
                    <a className="git" target="_blank" href="https://github.com/ahrgomez">
                        <i className="fa fa-github" />
                    </a>
                    <a className="linkedin"  target="_blank" href="https://es.linkedin.com/in/alejandro-hernández-a056233b" title="See ahrgomez's linkedin CV">
                        <i className="fa fa-linkedin" />
                    </a>
                    <a className="mail" target="_blank" href="mailto:ahrgomez@gmail.com" title="Send an email to ahrgomez">
                        <i className="fa fa-envelope" />
                    </a>
                    <a className="download" target="_blank" href="./files/ahrgomez-cv.pdf" title="Download ahrgomez pdf CV">
                        <i className="fa fa-download" />
                    </a>
                </div>
    }
}

export default Contact;