import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import MovieListItem from './MovieListItem';
import axios from 'axios'
import { X_RAPID_API_KEY } from '@env'



const arr = [

    {
        "name": "Mother/Android",
        "rating": "5,8",
        "imageURL": "https://www.themoviedb.org/t/p/w220_and_h330_face/rO3nV9d1wzHEWsC7xgwxotjZQpM.jpg",
        "overview": "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance. Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition.",
        "id": 8
    },
    {
        "name": "The House",
        "rating": "8,1",
        "overview": "SAW legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
        "imageURL": "https://www.themoviedb.org/t/p/w220_and_h330_face/iZjMFSKCrleKolC1gYcz5Rs8bk1.jpg",
        "id": 11
    },
    {
        "name": "Blitz 007",
        "rating": "9",
        "overview": "A tough, renegade cop with a gay sidekick is dispatched to take down a serial killer who has been targeting police officers. AÇIKLAMA AÇIKLAMA",
        "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qCPMjT8Ld8tvs1zs7LY2jpKlRIK.jpg",
        "id": 12
    }
]



export default function MovieList() {
    const [movieList, setMovieList] = useState([]);

    const getMovieList = async () => {
        const baseUrl = 'https://mdblist.p.rapidapi.com'

        await axios({
            method: 'get',
            url: `${baseUrl}?s='jaws'`,
            headers: {
                'x-rapidapi-host': 'mdblist.p.rapidapi.com',
                'x-rapidapi-key': X_RAPID_API_KEY
            }

        }).then((response) => {
            console.log("-------------")
            setMovieList(response.data["search"]);

        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {

        getMovieList();


    });

    console.log(movieList);

    return (
        <ScrollView style={styles.popularContainer} horizontal={true}>
            {
                arr.length == 0 ? <Text>Loading..</Text> :
                    arr.map((s) => (<MovieListItem key={s.id}
                        title={s.name}
                        image={s.imageURL}
                        rating={s.rating}
                         />)
                    )}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    popularContainer: {
        top: 50,
        left: 24,
    }

});
