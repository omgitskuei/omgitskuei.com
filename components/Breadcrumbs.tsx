'use client'

import React, { useEffect, useState } from 'react';

interface BreadcrumbItem {
    label: string,
    href: string,
}

export const Breadcrumbs = ({
    items = [],
    separator = '/',
}: {
    items?: BreadcrumbItem[],
    separator?: string,
}) => {

    const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>(items);
    const maxLinks = 4;
    const truncatedBreadcrumbItems = breadcrumbItems.slice(breadcrumbItems.length - maxLinks);

    useEffect(() => {
        if (items == undefined || items.length === 0) {
            if (typeof window) {
                const segments = window.location.pathname.split("/").filter(Boolean);
                const itemsNew: BreadcrumbItem[] = [];
                for (let i = 0; i < segments.length; i++) {
                    const eachSegment = segments[i];
                    // Grabs everything from the beginning up to the current segment and stitches them back together
                    const generatedHref = "/" + segments.slice(0, i + 1).join("/");
                    itemsNew.push({
                        label: eachSegment.charAt(0).toUpperCase() + eachSegment.slice(1), // Optional: Capitalizes "home" to "Home"
                        href: generatedHref
                    });
                }
                setBreadcrumbItems(itemsNew);
            }
        }
    }, []);

    return (
        <nav aria-label="Breadcrumb" style={{ padding: '10px 0' }}>
            <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
                {
                    breadcrumbItems.length > maxLinks ?
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            {/* Last item is the current page: unclickable and tagged for accessibility */}
                            <span aria-current="page"
                                style={{
                                    color: '#666',
                                    fontWeight: 'bold',
                                    fontFamily: 'sans-serif'
                                }}>
                                ...
                            </span>
                            <span style={{ margin: '0 8px', color: '#ccc', userSelect: 'none' }} aria-hidden="true">
                                {separator}
                            </span>
                        </li>
                        :
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <a href="/" style={{ textDecoration: 'none', color: '#0066cc', fontFamily: 'sans-serif' }}>
                                Home
                            </a>
                            <span style={{ margin: '0 8px', color: '#ccc', userSelect: 'none' }} aria-hidden="true">
                                {separator}
                            </span>
                        </li>
                }
                {
                    breadcrumbItems.length > maxLinks ?
                        truncatedBreadcrumbItems.map((item, index) => {
                            return (
                                <li key={`${item.href}_${index}`} style={{ display: 'flex', alignItems: 'center' }}>
                                    {
                                        index === (truncatedBreadcrumbItems.length) - 1 ? (
                                            <span aria-current="page" style={{ color: '#666', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                                                {item.label}
                                            </span>
                                        ) : (
                                            // Regular navigational links
                                            <>
                                                <a href={item.href} style={{ textDecoration: 'none', color: '#0066cc', fontFamily: 'sans-serif' }}>
                                                    {item.label}
                                                </a>
                                                {/* Separator symbol rendered between elements */}
                                                <span style={{ margin: '0 8px', color: '#ccc', userSelect: 'none' }} aria-hidden="true">
                                                    {separator}
                                                </span>
                                            </>
                                        )
                                    }
                                </li>
                            );
                        })
                        :
                        breadcrumbItems.map((item, index) => {
                            return (
                                <li key={`${item.href}_${index}`} style={{ display: 'flex', alignItems: 'center' }}>
                                    {
                                        index === (breadcrumbItems.length) - 1 ? (
                                            <span aria-current="page" style={{ color: '#666', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                                                {item.label}
                                            </span>
                                        ) : (
                                            // Regular navigational links
                                            <>
                                                <a href={item.href} style={{ textDecoration: 'none', color: '#0066cc', fontFamily: 'sans-serif' }}>
                                                    {item.label}
                                                </a>
                                                {/* Separator symbol rendered between elements */}
                                                <span style={{ margin: '0 8px', color: '#ccc', userSelect: 'none' }} aria-hidden="true">
                                                    {separator}
                                                </span>
                                            </>
                                        )
                                    }
                                </li>
                            );
                        })
                }
            </ol>
        </nav>
    );
};