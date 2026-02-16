import React from 'react';
import { getProjectBySlug } from '../../../../data/portfolio';
import ProjectClient from './ProjectClient';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // Default to Greek or English for metadata since we can't easily access client state here without cleaner structure
    const project = getProjectBySlug(slug, 'el');

    if (!project) {
        return { title: 'Project Not Found' };
    }

    return {
        title: `${project.location} | Δωδεκάνησα Glass`,
        description: `Project: ${project.type} at ${project.location}`,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <ProjectClient slug={slug} />;
}
