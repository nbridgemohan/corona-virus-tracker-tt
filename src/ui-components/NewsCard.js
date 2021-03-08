import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

}));



export default function NewsCard(props) {
    const classes = useStyles();

    return (
        <div key={props.key}>
        <Card className={classes.root}>
            <CardHeader
                subheader={props.time}
            />
            <CardMedia
                className={classes.media}
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <Typography paragraph>
                    <a href={props.url} target="_blank" rel="noopener noreferrer">
                        {props.title}
                    </a>
                </Typography>
            </CardContent>
        </Card>
        </div>
    );
}
