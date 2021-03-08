import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MainLoader from '../ui-components/MainLoader';
import NewsCard from '../ui-components/NewsCard';

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export default function Latest(props) {
    if (props.countryNewsData === undefined) {
        return <MainLoader />
    }

    else {

        let data = props.countryNewsData['countrynewsitems'][0]
        let dataArray = Object.values(data).reverse()
        dataArray.shift()
        // console.log(dataArray)
        return (
            <div>
                <Grid item xs={12} container direction="row" justify="center" alignItems="center">
                    <Box m={3}>
                        <Typography variant="h5">Latest News</Typography>
                    </Box>
                </Grid>
                {dataArray.map(el => (
                    <div>
                        <Box m={2}>
                            <Grid item xs={12} container direction="row" justify="center" alignItems="center">
                                <NewsCard title={decodeHtml(el.title)} image={el.image} time={el.time} url={el.url} key={el.newsid} />
                            </Grid>
                        </Box>
                    </div>
                ))}
            </div>
        );
    }

}