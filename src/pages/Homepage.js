import React from 'react';
import newsPosts from '../resources/newsPosts.json';
import NewsCard from '../components/NewsCard';
import Page from '../components/common/Page';
import IconLinkCard from '../components/IconLinkCard';
import LeagueCountdown from '../components/LeagueCountdown';

export default function Homepage() {
    return (
        <Page>
            <Page.Body>
                <div className='md:flex md:flex-row justify-center'>
                    <IconLinkCard title='Discord' />
                    <IconLinkCard title='Plugin' srcOverride='/img/runelite-icon.svg' />
                    <LeagueCountdown />
                    <IconLinkCard title='Wiki' iconOverride='menu_book' />
                    <IconLinkCard title='Feedback' iconOverride='pest_control' />
                </div>
                <p className='text-4xl small-caps ml-1'>Site News</p>
                {newsPosts.map(
                    newsPost =>
                        newsPost.type === 'blog' && (
                            <NewsCard
                                key={newsPost.title}
                                title={newsPost.title}
                                date={newsPost.date}
                                coverImg={newsPost.thumbnail}
                                leadText={newsPost.leadText}
                                htmlContent={newsPost.htmlContent}
                            />
                        )
                )}
            </Page.Body>
        </Page>
    );
}
