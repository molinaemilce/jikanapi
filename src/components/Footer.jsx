import { Container } from '@mui/system'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div style={{background:"#e6ab0b"}} className="footer">
        <Container className="footer__container">
            <div>
                <ul>
                    <li><a href="https://github.com/molinaemilce"><GitHubIcon /></a></li>
                    <li><a href="https://www.linkedin.com/in/emilcemolina"><LinkedInIcon/></a></li>
                </ul>
            </div>
            <div>
                Developed by Emilce Molina
            </div>
        </Container>
    </div>
  )
}

export default Footer