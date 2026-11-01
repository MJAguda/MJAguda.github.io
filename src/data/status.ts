import type { CollectionEntry } from 'astro:content';

type Status = NonNullable<CollectionEntry<'projects'>['data']['status']>;

// Label for the status pill on a project. `live` is the default and shows no pill.
export const statusBadge: Record<Status, string | null> = {
  live: null,
  'in-progress': 'In progress',
  'client-work': 'Client work',
  'personal-project': 'Personal project',
  'masters-thesis': "Master's thesis",
  workshop: 'Workshop',
  demo: 'Demo',
};
