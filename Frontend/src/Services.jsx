import img from '../public/img1.jpg'
import horror from '../public/horror.jpg'
import spiritual from '../public/spiritual.jpg'
import novel from '../public/novel.jpg'
import fiction from '../public/fiction.jpg'
import research from '../public/research.jpg'
import comedy from '../public/comedy.jpg'
import biography from '../public/biography.jpg'
import fantasy from '../public/fantasy.jpg'
import { Link } from 'react-router-dom'


const Services = () => {
    return (
        <>
            <section id='sec-1'>
                <div style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover'
                }} className='h-[100vh] flex justify-center items-center'>
                    <div className=' bg-slate-200 p-6 text-center'>
                        <div class="typewriter">
                            <h2 className='text-3xl font-bold text-slate-900'> WELCOME TO THE LIBRARY</h2>
                        </div>
                        <br />
                        <br />
                        <div className='welcome'><h3 className='text-xl text-slate-500 font-serif font-normal pointer-events-none'>Click here to enter the bookverse</h3><br />
                            <a href='#sec-4'>
                                <div className='scroll-down'></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>



            <section id='sec-3'>
                <div className='container1'>
                    <span style={{ '--i': 1 }}><img src='novel.jpg' alt='' /></span>
                    <span style={{ '--i': 2 }}><img src='fantasy.jpg' alt='' /></span>
                    <span style={{ '--i': 3 }}><img src='biography.jpg' alt='' /></span>
                    <span style={{ '--i': 4 }}><img src='fiction.jpg' alt='' /></span>
                    <span style={{ '--i': 5 }}><img src='comedy.jpg' alt='' /></span>
                    <span style={{ '--i': 6 }}><img src='horror.jpg' alt='' /></span>
                    <span style={{ '--i': 7 }}><img src='research.jpg' alt='' /></span>
                    <span style={{ '--i': 8 }}><img src='spiritual.jpg' alt='' /></span>
                </div>
            </section>


            <section id='sec-4'>
                <div className='text-5xl text-white flex flex-col'>
                    <div className='text-center'>Trending</div>
                    {/* Rank 2 */}
                    <div className='flex gap-6'>
                        <div className='rank flex flex-col text-center'>
                            <h2 className='font-bold text-8xl text-[#C0C0C0]'>2</h2>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="Fantasy2.jpg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
                                    </div>
                                    <div class="flip-card-back" style={{backgroundColor:"#C0C0C0", color:"#333333", borderRadius: "9999px"}}><br />
                                        <h2>TRENDING #2</h2><br />
                                        <h5>Total Searches:</h5><br />
                                        <h4>1,28,435</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rank 1*/}
                        <div className='rank flex flex-col text-center'>
                            <h2 className='font-bold text-9xl text-[#FFD700]'>1</h2>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="Fantasy1.jpg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
                                    </div>
                                    <div class="flip-card-back" style={{backgroundColor:"#FFD700", color:"#333333", borderRadius: "9999px"}}><br />
                                        <h2>TRENDING #1</h2><br />
                                        <h5>Total Searches:</h5><br />
                                        <h4>1,98,865</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rank 3 */}
                        <div className='rank flex flex-col text-center'>
                            <h2 className='font-bold text-7xl text-[#333333]'>3</h2>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="Fantasy4.jpg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
                                    </div>
                                    <div class="flip-card-back" style={{backgroundColor:"#CD7F32", color:"#333333", borderRadius: "9999px"}}><br />
                                        <h2>TRENDING #3</h2><br />
                                        <h5>Total Searches:</h5><br />
                                        <h4>1,01,455</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='sec-4'>
                <div className='text-5xl text-white flex flex-col'>
                    <div className='text-center'>Best Seller</div>
                    {/* Rank 2 */}
                    <div className='flex gap-6'>
                        <div className='rank flex flex-col text-center'>
                        <h2 className='font-bold text-8xl text-[#C0C0C0]'>2</h2>
                        <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="r1.jpg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
                                    </div>
                                    <div class="flip-card-back" style={{backgroundColor:"#C0C0C0", color:"#333333", borderRadius: "9999px"}}><br />
                                        <h2>SELLING AT #2</h2><br />
                                        <h5>Total Sales:</h5><br />
                                        <h4>88,786</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rank 1 */}
                        <div className='rank flex flex-col text-center'>
                        <h2 className='font-bold text-9xl text-[#FFD700]'>1</h2>
                        <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="harry.jpg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
                                    </div>
                                    <div class="flip-card-back" style={{backgroundColor:"#FFD700", color:"#333333", borderRadius: "9999px"}}><br />
                                        <h2>SELLING AT  #1</h2><br />
                                        <h5>Total Sales:</h5><br />
                                        <h4>99,864</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rank 3 */}
                        <div className='rank flex flex-col text-center'>
                        <h2 className='font-bold text-7xl text-[#333333]'>3</h2>
                        <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="r3.jpg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
                                    </div>
                                    <div class="flip-card-back" style={{backgroundColor:"#CD7F32", color:"#333333", borderRadius: "9999px"}}><br />
                                        <h2>SELLING AT #3</h2><br />
                                        <h5>Total Sales:</h5><br />
                                        <h4>41,985</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='sec-4'>
                <div className='text-5xl text-white flex flex-col'>
                    <div className='text-center'>Editor's Choice</div>
                    {/* Rank 2 */}
                    <div className='flex gap-6'>
                        <div className='rank flex flex-col text-center'>
                        <h2 className='font-bold text-8xl text-[#C0C0C0]'>2</h2>
                        <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="h3.jpg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
                                    </div>
                                    <div class="flip-card-back" style={{backgroundColor:"#C0C0C0", color:"#333333", borderRadius: "9999px"}}><br />
                                        <h2>RANKING #2</h2><br />
                                        <h5>Total Recommendation:</h5><br />
                                        <h4>78,435</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rank 1 */}
                        <div className='rank flex flex-col text-center'>
                        <h2 className='font-bold text-9xl text-[#FFD700]'>1</h2>
                        <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="Mystery1.jpg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
                                    </div>
                                    <div class="flip-card-back" style={{backgroundColor:"#FFD700", color:"#333333", borderRadius: "9999px"}}><br />
                                        <h2>RANKING #1</h2><br />
                                        <h5>Total Recommendation:</h5><br />
                                        <h4>90,865</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rank 3 */}
                        <div className='rank flex flex-col text-center'>
                        <h2 className='font-bold text-7xl text-[#333333]'>3</h2>
                        <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="h5.jpg" alt="Avatar" style={{ width: '300px', height: '300px' }} />
                                    </div>
                                    <div class="flip-card-back" style={{backgroundColor:"#CD7F32", color:"#333333", borderRadius: "9999px"}}><br />
                                        <h2>RANKING #3</h2><br />
                                        <h5>Total Recommendation:</h5><br />
                                        <h4>41,455</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id='sec-2'>
                <div className='h-[100vh] flex flex-col justify-center items-center text-center'>
                    <Link to={'/genres'} className='text-4xl'>Genre</Link>
                    <h3 className='pointer-events-none mt-2'>Choose type of book</h3>
                    <div className='category p-3 mt-4 flex flex-wrap gap-3 w-[100%]'>

                        {/* Novel */}
                        <div class='genre' style={{
                            backgroundImage: `url(${novel})`,
                            backgroundSize: 'cover',
                            color: 'white'
                        }}>
                            <Link to={'/genres'} className='text-4xl'>Novel</Link>
                        </div>

                        {/* Fiction */}
                        <div class='genre' style={{
                            backgroundImage: `url(${fiction})`,
                            backgroundSize: 'cover',
                            color: 'white'
                        }}>
                            <Link to={'/genres'} className='text-4xl'>Fiction</Link>
                        </div>

                        {/* Horror */}
                        <div class='genre' style={{
                            backgroundImage: `url(${horror})`,
                            backgroundSize: 'cover',
                            color: 'white'
                        }}>
                            <Link to={'/genres'} className='text-4xl'>Horror</Link>
                        </div>

                        {/* Comedy */}
                        <div class='genre' style={{
                            backgroundImage: `url(${comedy})`,
                            backgroundSize: 'cover',
                            color: 'white'
                        }}>
                            <Link to={'/genres'} className='text-4xl'>Comedy</Link>
                        </div>

                        {/* Spiritual */}
                        <div class='genre' style={{
                            backgroundImage: `url(${spiritual})`,
                            backgroundSize: 'cover',
                            color: 'white'
                        }}>
                            <Link to={'/genres'} className='text-4xl'>Spiritual</Link>
                        </div>

                        {/* Research */}
                        <div class='genre' style={{
                            backgroundImage: `url(${research})`,
                            backgroundSize: 'cover',
                            color: 'white'
                        }}>
                            <Link to={'/genres'} className='text-4xl'>Research</Link>
                        </div>

                        {/* Biography */}
                        <div class='genre' style={{
                            backgroundImage: `url(${biography})`,
                            backgroundSize: 'cover',
                            color: 'white'
                        }}>
                            <Link to={'/genres'} className='text-4xl'>Biography</Link>
                        </div>

                        {/* Fantasy */}
                        <div class='genre' style={{
                            backgroundImage: `url(${fantasy})`,
                            backgroundSize: 'cover',
                            color: 'white'
                        }}>
                            <Link to={'/genres'} className='text-4xl'>Fantasy</Link>
                        </div>


                    </div>

                </div>
            </section>

        </>
    )
}

export default Services