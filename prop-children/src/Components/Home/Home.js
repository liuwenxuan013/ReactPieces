import React from 'react';
import Poster from './Posters/Poster';
import Card from './Card/Card';
class Home extends React.Component
{

    state = {
        posters: [
            {
                id: '01',

                posterTitle: 'Programmer World',
                imgUrl: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-8.jpg',
                content: 'Welcome to Programming World!',
                doesShow: true
            },
            {
                id: '02',

                posterTitle: 'Real World',
                imgUrl: 'https://www.success.com/wp-content/uploads/legacy/sites/default/files/main/articles/thewaronfeelings.jpg',
                content: 'Welcome to real World!',
                doesShow: false
            }

        ]




    };
    changeContentHandler = (event, id) =>
    {
        const posterIndex = this.state.posters.findIndex(p =>
        {
            return p.id === id;
        });
        const newPoster = {
            ...this.state.posters[posterIndex]
        };
        newPoster.content = event.target.value;
        const newPosters = [...this.state.posters];
        newPosters[posterIndex] = newPoster;
        this.setState({ posters: newPosters })

    };

    clickPosterHandler = (id) =>
    {
        const posterIndex = this.state.posters.findIndex(p =>
        {
            return p.id === id;
        });
        const newPoster = {
            ...this.state.posters[posterIndex]
        };
        newPoster.doesShow = !(this.state.posters[posterIndex].doesShow);
        const newPosters = [...this.state.posters];
        newPosters[posterIndex] = newPoster;
        this.setState({ posters: newPosters })


    }
    render()
    {



        return this.state.posters.map((poster) =>
        {

            return (
                <div key={poster.id}>


                    <Poster
                        key={poster.id}
                        posterTitle={poster.posterTitle}
                        imgUrl={poster.imgUrl}
                        changeContent={(event) => this.changeContentHandler(event, poster.id)}
                        content={poster.content}
                        clickPoster={() => this.clickPosterHandler(poster.id)}
                        doesShow={poster.doesShow}

                    >
                        <p> {poster.content}</p>
                    </Poster>

                    <Card />
                </div>
            )
        }
        );




    }

}

export default Home;
