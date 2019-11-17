import React from 'react';
import Poster from './Posters/Poster';
class Home extends React.Component
{

    state = {
        posters: [
            {
                id: '01',

                posterTitle: 'Programmer World',
                imgUrl: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/111169624/original/7afa2f60f3677c46c2f57fa555ca8f164337e240/be-your-computer-science-programer.jpg',
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
                <div>

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

                </div>
            )
        }
        );




    }

}

export default Home;
