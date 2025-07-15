import type { APIRoute } from 'astro';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { title, description, image, imageAlt, tags, author, content } = data;

    // Validate required fields
    if (!title || !description || !image || !imageAlt || !content) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Missing required fields' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create a slug from the title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();

    // Add timestamp to ensure uniqueness
    const timestamp = Date.now();
    const filename = `${slug}-${timestamp}.md`;

    // Parse tags (comma-separated string to array)
    const tagsArray = tags ? tags.split(',').map((tag: string) => tag.trim()).filter(Boolean) : [];

    // Create the frontmatter
    const frontmatter = `---
title: "${title}"
description: "${description}"
image: "${image}"
imageAlt: "${imageAlt}"
publishDate: ${new Date().toISOString()}
author: "${author || 'Admin'}"
tags: [${tagsArray.map((tag: string) => `"${tag}"`).join(', ')}]
---

${content}`;

    // Write the file to the blog directory
    const filePath = join(process.cwd(), 'src', 'content', 'blog', filename);
    await writeFile(filePath, frontmatter, 'utf-8');

    return new Response(JSON.stringify({ 
      success: true, 
      filename,
      slug: slug + '-' + timestamp
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error creating blog post:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Failed to create blog post' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};