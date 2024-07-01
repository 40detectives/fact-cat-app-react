// @ts-check
import { test, expect } from '@playwright/test'
import { CAT_IMAGE_ENDPOINT_PREFIX } from '../src/services/cat-images-provider'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.locator('img').first()

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_IMAGE_ENDPOINT_PREFIX)).toBeTruthy()
})

test('button refreshes the fact and the image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const currentTextContent = await page.getByRole('paragraph').textContent()
  const currentImageSrc = await page.locator('img').first().getAttribute('src')

  await Promise.all([
    page.waitForResponse('https://catfact.ninja/fact'), // API #1
    page.waitForResponse(
      (res) =>
        res.url().includes(CAT_IMAGE_ENDPOINT_PREFIX) && res.status() === 200, // API #2
    ),
    // click the button
    page.getByRole('button', { name: 'Get new fact' }).click(), // interaction
  ])

  const newTextContent = await page.getByRole('paragraph').textContent()
  const newImageSrc = await page.locator('img').first().getAttribute('src')

  console.log({ 1: currentTextContent, 2: newTextContent })
  console.log({ 1: currentImageSrc, 2: newImageSrc })
  await expect(currentTextContent).not.toEqual(newTextContent)
  await expect(currentImageSrc).not.toEqual(newImageSrc)
})
