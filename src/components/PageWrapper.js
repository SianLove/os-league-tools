import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Page from './common/Page';
import NavBar, { NavItem } from './common/NavBar';
import AuthButton from './nav/AuthButton';
import FeedbackModal from './FeedbackModal';
import ManageDataModal from './ManageDataModal';
import images from '../assets/images';
import useQueryString from '../hooks/useQueryString';
import ManageData from './nav/ManageData';
import Feedback from './nav/Feedback';

export default function PageWrapper({ children }) {
    const theme = useSelector(state => state.settings.theme);
    const limitContentWidth = useSelector(state => state.settings.limitContentWidth);
    const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
    const [manageDataModalType, setManageDataModalType] = useQueryString('open');

    const navItems = [
        new NavItem('Stats', 'primary', 0, 0).withRouterLink('/stats').withIconFont('query_stats'),
        new NavItem('Trackers', 'primary', 0, 1).withRouterLink('/tracker').withIconFont('checklist_rtl'),
        new NavItem('Calculators', 'primary', 0, 2).withRouterLink('/calculators').withIconFont('calculate'),
        new NavItem('Import', 'secondary', 1, 0).withCustomRenderFn(
            () => <ManageData.NavBarItem key='manage' setManageDataModalType={setManageDataModalType} />,
            () => <ManageData.CollapsedMenu key='manage' setManageDataModalType={setManageDataModalType} />
        ),
        new NavItem('Login', 'secondary', 2, 0).withCustomRenderFn(
            () => <AuthButton.NavBarItem key='login' />,
            () => <AuthButton.CollapsedMenu key='login' />
        ),
        new NavItem('Settings', 'overflow', 2, 1).withRouterLink('/settings').withIconFont('settings'),
        new NavItem('Discord', 'overflow', 3, 0)
            .withHref('https://discord.gg/GQ5kVyU', '_blank')
            .withIconFont('discord'),
        new NavItem('Feedback', 'overflow', 3, 1).withCustomRenderFn(
            () => <Feedback.NavBarItem key='feedback' setFeedbackModalOpen={setFeedbackModalOpen} />,
            () => <Feedback.CollapsedMenu key='feedback' setFeedbackModalOpen={setFeedbackModalOpen} />
        ),
        new NavItem('Github', 'overflow', 3, 2)
            .withHref('https://github.com/osrs-reldo/os-league-tools', '_blank')
            .withIconFont('code'),
        new NavItem('Tip Jar', 'overflow', 3, 3)
            .withHref('https://ko-fi.com/osleaguetools', '_blank')
            .withIconFont('savings'),
        new NavItem('About', 'overflow', 3, 4).withRouterLink('/about').withIconFont('help_outline'),
    ];

    return (
        <Page limitContentWidth={limitContentWidth}>
            <Page.Nav>
                <NavBar navItems={navItems} brandName='OS League Tools' brandLogo={images[`icon-${theme}.png`]} />
            </Page.Nav>
            <Page.Body>
                {children}
                <FeedbackModal isOpen={isFeedbackModalOpen} setIsOpen={val => setFeedbackModalOpen(val)} />
                <ManageDataModal
                    variant={manageDataModalType}
                    isOpen={!!manageDataModalType}
                    setIsOpen={() => setManageDataModalType(null)}
                />
            </Page.Body>
        </Page>
    );
}
