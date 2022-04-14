import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function PlayCarousel(props){
    const {data} = props
    const {image_urls, video_url} = data
    return (
        <OwlCarousel className='owl-theme'
                     nav
                     items={1}
                     merge={true}
                     loop={true}
                     video={true}
                     lazyLoad={true}
                     center={false}
                     margin={10}
                     autoWidth={true}
                     responsive={{
                        480:{
                            items:2
                        },
                        600:{
                            items:4
        }}}>
            {video_url? <a key={0} className="owl-video" href={video_url}/> : ""}
            {image_urls.map((url, i) => {
                return (
                    <div key={i+1} className='item'>
                        <img src={url} alt={"Image can't be loaded"}/>
                    </div>
                );
            })}
        </OwlCarousel>
    );
}