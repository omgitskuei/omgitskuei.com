'use client'

import React, { useEffect, useState } from 'react';

interface BreadcrumbItem {
    label: string;
    href: string;
}

export const Breadcrumbs = ({
    items = [],
    separator = '/',
}: {
    items?: BreadcrumbItem[];
    separator?: string;
}) => {

    const [itemsFromURL, setItemsFromURL] = useState<BreadcrumbItem[]>([]);
    const maxLinks = 4;

    useEffect(() => {
        // Only generate from URL if no items were passed as props
        if (items.length === 0) {
            if (typeof window !== 'undefined') {
                const segmentsFromURL = window.location.pathname.split("/").filter(Boolean);
                const itemsNew = segmentsFromURL.map((segment, i) => ({
                    label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
                    href: "/" + segmentsFromURL.slice(0, i + 1).join("/")
                }));
                setItemsFromURL(itemsNew);
            }
        }
    }, []);

    // Use items from props if provided, otherwise use items from URL
    const activeItems = items.length > 0 ? items : itemsFromURL;

    // Add left-most item "Home" or "..." based on how many items there are
    const getVisibleItems = (): BreadcrumbItem[] => {
        if (activeItems.length <= maxLinks) {
            return [{ label: 'Home', href: '/' }, ...activeItems];
        }
        return [
            { label: '...', href: '#' },
            ...activeItems.slice(-maxLinks)
        ];
    };

    const visibleItems = getVisibleItems();
    const commonTextStyle = { fontFamily: 'sans-serif' };

    return (
        <nav aria-label="Breadcrumb" style={{ padding: '10px 0' }}>
            <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
                {
                    visibleItems.map((item, index) => {
                        const isLast = index === visibleItems.length - 1;

                        return (
                            <li key={`${item.href}_${index}`} style={{ display: 'flex', alignItems: 'center' }}>
                                {
                                    isLast ? (
                                        // Last (non-link) item
                                        <span aria-current="page" style={{ color: '#666', fontWeight: 'bold', ...commonTextStyle }}>
                                            {item.label}
                                        </span>
                                    ) : item.label === '...' ? (
                                        // ... alternative to Home
                                        <span style={{ color: '#666', fontWeight: 'bold', ...commonTextStyle }}>
                                            {item.label}
                                        </span>
                                    ) : (
                                        // Items (including Home)
                                        <a href={item.href} style={{ textDecoration: 'none', color: '#0066cc', ...commonTextStyle }}>
                                            {item.label}
                                        </a>
                                    )
                                }
                                {/* Separators */}
                                {
                                    !isLast && (
                                        <span style={{ margin: '0 8px', color: '#ccc', userSelect: 'none' }} aria-hidden="true">
                                            {separator}
                                        </span>
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