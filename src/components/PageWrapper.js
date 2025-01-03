import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Banner from './common/Banner';
import Page from './common/Page';
import NavBar, { NavItem } from './common/NavBar';
import FeedbackModal from './FeedbackModal';
import ManageDataModal from './ManageDataModal';
import images from '../assets/images';
import useQueryString from '../hooks/useQueryString';
import ManageData from './nav/ManageData';
import Feedback from './nav/Feedback';
import Character from './nav/Character';
import ManageCharactersModal from './ManageCharactersModal';

export default function PageWrapper({ children }) {
  const theme = useSelector(state => state.settings.theme);
  const limitContentWidth = useSelector(state => state.settings.limitContentWidth);
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [isCharacterModalOpen, setCharacterModalOpen] = useState(false);
  const [manageDataModalType, setManageDataModalType] = useQueryString('open');

  const navItems = [
    new NavItem('Stats', 'primary', 0, 0).withRouterLink('/stats').withIconFont('query_stats'),
    new NavItem('Trackers', 'primary', 0, 1).withRouterLink('/tracker').withIconFont('checklist_rtl'),
    new NavItem('Calculators', 'primary', 0, 2).withRouterLink('/calculators').withIconFont('calculate'),
    new NavItem('Character', 'secondary', 1, 0).withCustomRenderFn(
      () => <Character.NavBarItem key='character' setCharacterModalOpen={setCharacterModalOpen} />,
      () => <Character.CollapsedMenu key='character' setCharacterModalOpen={setCharacterModalOpen} />
    ),
    new NavItem('Import', 'secondary', 2, 0).withCustomRenderFn(
      () => <ManageData.NavBarItem key='manage' setManageDataModalType={setManageDataModalType} />,
      () => <ManageData.CollapsedMenu key='manage' setManageDataModalType={setManageDataModalType} />
    ),
    // TODO re-enable user login
    // new NavItem('Login', 'secondary', 3, 0).withCustomRenderFn(
    //   () => <AuthButton.NavBarItem key='login' />,
    //   () => <AuthButton.CollapsedMenu key='login' />
    // ),
    new NavItem('Settings', 'overflow', 3, 1).withRouterLink('/settings').withIconFont('settings'),
    new NavItem('Discord', 'overflow', 4, 0).withHref('https://discord.gg/GQ5kVyU', '_blank').withIconFont('discord'),
    new NavItem('Feedback', 'overflow', 4, 1).withCustomRenderFn(
      () => <Feedback.NavBarItem key='feedback' setFeedbackModalOpen={setFeedbackModalOpen} />,
      () => <Feedback.CollapsedMenu key='feedback' setFeedbackModalOpen={setFeedbackModalOpen} />
    ),
    new NavItem('Github', 'overflow', 4, 2)
      .withHref('https://github.com/osrs-reldo/os-league-tools', '_blank')
      .withIconFont('code'),
    new NavItem('Tip Jar', 'overflow', 4, 3)
      .withHref('https://ko-fi.com/osleaguetools', '_blank')
      .withIconFont('savings'),
    new NavItem('FAQ', 'overflow', 4, 4).withRouterLink('/faq').withIconFont('help_outline'),
    new NavItem('About', 'overflow', 4, 5).withRouterLink('/about').withIconFont('info'),
  ];

  return (
    <Page limitContentWidth={limitContentWidth}>
      <Page.Nav>
        <NavBar navItems={navItems} brandName='OS League Tools' brandLogo={images[`icon-${theme}.png`]} />
      </Page.Nav>
      <Page.Banner>
        <Banner className='mx-[20%] mb-4'>
          <p className='text-accent text-center'>✨ RAGING ECHOES LEAGUE IS HERE! ✨</p>
          <p className='text-sm mb-2'>Please be patient with us as we get everything up & running.</p>
          <p className='text-sm mb-2'>
            The initial task list is expected to be available within a few hours after the servers go live. Some task
            info may be missing or incorrect for the first day or two. We do NOT get any advance knowledge from Jagex so
            it will take us some time to ingest all of the data!
          </p>
          <p className='text-sm'>
            If you notice any other incorrect data, please{' '}
            <span className='text-accent underline cursor-pointer' onClick={() => setFeedbackModalOpen(true)}>
              submit a bug report
            </span>{' '}
            and we'll get to it as soon as we can!
          </p>
        </Banner>
      </Page.Banner>
      <Page.Body>
        {children}
        <FeedbackModal isOpen={isFeedbackModalOpen} setIsOpen={val => setFeedbackModalOpen(val)} />
        <ManageCharactersModal isOpen={isCharacterModalOpen} setIsOpen={val => setCharacterModalOpen(val)} />
        <ManageDataModal
          variant={manageDataModalType}
          isOpen={!!manageDataModalType}
          setIsOpen={() => setManageDataModalType(null)}
        />
      </Page.Body>
    </Page>
  );
}
