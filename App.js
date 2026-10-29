import React from 'react';
import { ScrollView } from 'react-native';
import Movie from './components/Movie';

class AllMovies extends React.Component {
    render() {
        return (
            <ScrollView>
                <Movie
                    title="Doctor Sleep"
                    year={2019}
                    icon_name="skull"
                    icon_color="red"
                    poster={require('./img/doctor-sleep.jpg')}
                />

                <Movie
                    title="Midway"
                    year={2020}
                    icon_name="person-rifle"
                    icon_color="blue"
                    poster={require('./img/midway.jpg')}
                />
            </ScrollView>
        );
    }
}

export default AllMovies;
