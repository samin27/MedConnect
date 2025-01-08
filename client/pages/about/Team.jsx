import { Grid } from "@mui/material";
import Member from "./Member";

const teamData = [
	{
		name: "Samin Joy",
		image: "https://res.cloudinary.com/dapxc0trh/image/upload/v1735225986/Frame_1_yxy7dt.png",
		title: "Web Developer",
		bio: "Hey, I'm Samin, a highly skilled MERN stack developer with over 1.5 years of professional experience. My expertise lies in MongoDB, Express, React, and Node.js. I also make UI design in Figma and Adobe Xd. I'm passionate about creating dynamic, visually appealing and user-friendly web applications that meet the unique needs of my clients. Let's collaborate to bring your ideas to life.",
		ln: "https://www.linkedin.com/in/samin27/",
		wp: "whatsapp://send?phone=+8801886513322",
		gh: "https://github.com/samin27",
		email: "samen35-3113@diu.edu.bd"
	},
];

const Team = () => {
	return (
		<Grid 
		      container 
		      spacing={2} 
			  sx={{
			padding: { xs: "16px", sm: "20px" },
			display: "flex",
			justifyContent: "center", // Center horizontally
			alignItems: "center",    // Center vertically
			minHeight: "100vh",      // Set full screen height
		  }}>
			{teamData.map((data, i) => (
				<Member key={i} data={data} />
			))}
		</Grid>
	);
};

export default Team;
