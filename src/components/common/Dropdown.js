import React from 'react';
import { DROPDOWN } from './util/theme';

function Dropdown({ children, innerRef, show, width = DROPDOWN.content }) {
    return (
        <ul
            role='menu'
            className={`${DROPDOWN[width] || width} bg-primary border-x border-b border-primary inline-block ${
                !show && 'hidden'
            }`}
            ref={innerRef}
        >
            {children}
        </ul>
    );
}

function TextItem({ children, isHeading = false }) {
    return <li className={`px-3 py-2 block ${isHeading && 'font-semibold'}`}>{children}</li>;
}

function LinkItem({ children, href, target = '_self', icon = null }) {
    return (
        <li>
            <a href={href} target={target} className='text-primary-alt px-3 py-2 block bg-hover'>
                {icon && <span className='icon-lg align-middle mr-1'>{icon}</span>}
                {children}
            </a>
        </li>
    );
}

function ButtonItem({ children, onClick, icon = null }) {
    return (
        <li>
            <button onClick={onClick} type='button' className='text-primary-alt px-3 py-2 block bg-hover'>
                {icon && <span className='icon-lg align-middle mr-1'>{icon}</span>}
                {children}
            </button>
        </li>
    );
}

function Separator() {
    return <li className='h-px w-full bg-subdued' />;
}

Dropdown.Text = TextItem;
Dropdown.Link = LinkItem;
Dropdown.Button = ButtonItem;
Dropdown.Separator = Separator;

export default Dropdown;