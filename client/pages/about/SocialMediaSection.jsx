import "./SocialMedia.css";
import { Box } from "@mui/material";
import { IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp } from "@tabler/icons-react";

const SocialMediaSection = ({ ln, gh, wp }) => {
	return (
		<Box id="socialMedia">
			<Box className="process-section">
				<Box className="social-bar">
					<Box className="social-icons">
						<a href={ln} className="slider-nav-item">
							<IconBrandLinkedin className="social-icon" />
						</a>
						<a href={gh} className="slider-nav-item">
							<IconBrandGithub className="social-icon" />
						</a>
						<a href={wp} className="slider-nav-item">
							<IconBrandWhatsapp className="social-icon" />
						</a>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default SocialMediaSection;
