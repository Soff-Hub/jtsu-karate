import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export default function SearchResult({ searchResult, searchVal }) {
    const { push } = useRouter()
    console.log(searchResult);

    return (
        <div className='search-result wow animate__animated animate__fadeIn'>
            <div className='search-result-list'>
                {
                    searchResult && searchResult?.slice(0, 4).map((item, i) => (
                        <div key={i} className='search-result-item'>
                            <Link
                                className={`color-gray-500 d-flex justify-centen-start pb-2 gap-3`}
                                href={item.sign === 'text_book' ? `/darsliklar/${item.id}` : item.sign === 'text_book_content' ? item.poster : item.sign === "video_tutorial" ? `/videolar/${item.id}` : item.sign === "video_tutorial_content" ? `/videolar/1/preview/${item.id}` : item.sign === "document" ? `/maqolalar/` : 'https://st.jtsu.uz//elfinder-files/icons/pdf.png'}
                            >
                                <>
                                    <div style={{ maxWidth: '60px', display: 'flex', width: '100%', justifyContent: 'center' }}>
                                        <img
                                            style={{ width: '100%' }}
                                            src={item.sign === 'text_book' || item.sign === 'video_tutorial' || item.sign === 'content' ? item.poster : item.sign === 'text_book_content' ? 'https://st.jtsu.uz//elfinder-files/icons/pdf.png' : item.sign === "video_tutorial_content" ? '/assets/imgs/page/homepage/video-icon.png' : 'https://st.jtsu.uz//elfinder-files/icons/pdf.png'}
                                        />
                                    </div>

                                    {item.title}
                                </>
                            </Link>
                        </div>
                    ))
                }
                {
                    searchResult?.length === 0 ? "Natijalar topilmadi!" : ""
                }
            </div>
            {searchResult?.length > 4 && <div onClick={() => push(`/search/${searchVal}`)} style={{ paddingTop: '10px', cursor: 'pointer' }}>Barcha natijalarni ko'rish</div>}
        </div >
    )
}
