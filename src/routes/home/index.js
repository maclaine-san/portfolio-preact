import { h } from "preact";
import { useRecoilState } from "recoil";
import { themeState } from "../../components/store";
import {
	FiSun,
	FiMoon,
	FiFacebook,
	FiGithub,
	FiTwitter,
	FiLinkedin,
} from "react-icons/fi";

const Home = () => {
	const [theme, setTheme] = useRecoilState(themeState);

	const themeToggleHandler = () => {
		setTheme(theme === "blue" ? "black" : "blue");
	};

	return (
		<div
			className={`flex flex-col full ${
				theme === "blue" ? "blue" : "black"
			}`}
		>
			<div className="flex justify-between items-center">
				<p className="semi-bold">John Maclaine</p>
				{theme === "black" ? (
					<FiSun
						onClick={themeToggleHandler}
						color="white"
						size={20}
						className="cursor-pointer hover:bg-gray-700 rounded-lg"
					/>
				) : (
					<FiMoon
						onClick={themeToggleHandler}
						color="white"
						size={20}
						className="cursor-pointer hover:bg-blue-500 rounded-lg"
					/>
				)}
			</div>
			<div className="mt-20 flex justify-center">
				<img
					src={`/assets/${
						theme === "blue" ? "panda-blue" : "panda-black"
					}.png`}
					height={138}
				/>
			</div>
			<div
				style={{
					backgroundColor: theme === "blue" ? "#6970C9" : "#3A3C52",
				}}
				className="p-10 rounded-lg text-center mt-20"
			>
				<p className="semi-bold">
					Hi! I am a full-stack developer from the Philippines!
				</p>
			</div>
			<div className="flex mt-20">
				<img
					src="/assets/my-image.jpg"
					height={180}
					width={180}
					className="rounded-full"
				/>
				<div className="ml-5">
					<p className="semi-bold" style={{ fontSize: 40 }}>
						John Maclaine Danao
					</p>
					<p className="regular">
						Full-stack developer / Entrepreneur
					</p>
					<div
						className="flex mt-3"
						style={{ position: "relative", left: -10 }}
					>
						<FiFacebook color="white" size={39} className="mr-3" />
						<FiGithub color="white" size={39} className="mr-3" />
						<FiTwitter color="white" size={39} className="mr-3" />
						<FiLinkedin color="white" size={39} className="mr-3" />
					</div>
				</div>
			</div>

			<div className="mt-20">
				<p
					className={`semi-bold ${
						theme === "blue" ? "head-blue" : "head-black"
					}`}
				>
					#: whoami
				</p>
				<p className="regular text-justify">
					{"    "}Mac is a freelance developer who is passionate on
					creating and building applications, he specializes on web
					and mobile development, and is able to architect systems
					from frontend to backend. On his free time he likes to go to
					the beach, eat seafood or grilled meat.
				</p>
			</div>

			<div className="mt-20">
				<p
					className={`semi-bold ${
						theme === "blue" ? "head-blue" : "head-black"
					}`}
				>
					#: history | grep Bio
				</p>
				<p className="regular">
					1995 Born in Jamindan Capiz.
					<br />
					<br />
					2017 Worked in 1722 IT Services as a Software Engineer
					(Intern to Fulltime).
					<br />
					<br />
					2018 Completed Bachelor of Science in Computer Engineering
					Major in Computer Networks.
					<br />
					<br />
					2018 Worked in Lanex Corporation as a Software Engineer.
					<br />
					<br /> 2020 to present Started Freelance/Consulting as a
					Full-stack developer.
				</p>
			</div>

			<div className="mt-20">
				<p
					className={`semi-bold ${
						theme === "blue" ? "head-blue" : "head-black"
					}`}
				>
					#: cat /etc/my/tech
				</p>
				<p className="regular text-justify">
					React.js, React Native, Next.js, Preact.js, Vue.js, GraphQL,
					Node.js, Express.js, Hasura, Postgres, MongoDB, AWS, Azure,
					Digital Ocean, Nginx, Traefik, Apache2
				</p>
			</div>

			<div className="my-20">
				<p className="text-center regular text-gray-400">
					@2022 John Maclaine Danao. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Home;
