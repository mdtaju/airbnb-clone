import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {format} from 'date-fns'
import InfoCards from '../components/InfoCards';
import Map from '../components/Map';

const Search = ({searchResult}) => {
    const router = useRouter();
    const {location, startDate, endDate, numberOfGuests} = router.query;
    console.log(searchResult)

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formattedEndDate = format(new Date(startDate), 'dd MMMM yy');
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div>
            <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 transition-all transform duration-300 ease-in-out'>
                <Header placeholder={`${location.toLowerCase()} | ${range} | ${numberOfGuests} guests`}/>
            </header>

            <main className='flex'>
                <section className='flex-grow pt-14 mx-6'>
                    <p className='text-sm'>300+ Stays - {range} - for {numberOfGuests} guests</p>
                    <h1 className='text-2xl font-medium mt-2 mb-6'>Stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-700 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filter</p>
                    </div>
                    {
                        searchResult?.map((item, id) => (
                            <InfoCards key={id} item={item}/>
                        ))
                    }
                </section>
                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map searchResults={searchResult}/>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Search;

export async function getServerSideProps() {
    const searchResult = await fetch('https://links.papareact.com/isz').then(res => res.json());
    return {
        props: {
            searchResult
        }
    }
}