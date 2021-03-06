import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import captureImg from './images/capture.png';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="lg">
			<AppBar position="static" color="inherit">
				<Typography variant="h2" align="center">
					Capture
					<img src={captureImg} alt="capture" height="60" />
				</Typography>
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justify="space-between"
						alignItems="stretch"
						spacing={3}
					>
						<Grid item xs={12} sm={7}>
							<Posts />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
