'use client';

import { BuilderComponent, builder } from '@builder.io/react';
import { notFound } from 'next/navigation';

builder.init('YOUR_PUBLIC_API_KEY');

async function getBuilderPage(path: string) {
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: path || '/',
      },
    })
    .toPromise();
  return page;
}

export default async function Page({ params }: { params: { page?: string[] } }) {
  const path = '/' + (params.page?.join('/') || '');
  const page = await getBuilderPage(path);

  if (!page) notFound();

  return <BuilderComponent model="page" content={page} />;
}
