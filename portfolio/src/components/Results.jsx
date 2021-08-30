import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Repocard from './Repocard';


const Results = (props) => {
    const { repos } = props;
    console.log(repos.data);

    const listRepos =
        repos.length !== 0 ? (
            repos.map((item) => <Repocard data={item} />)
        ) : (
            <h2>Please try to refetch repositories..</h2>
        );


    return (

        <div>
            {listRepos}
        </div>
    )
}
export default Results;