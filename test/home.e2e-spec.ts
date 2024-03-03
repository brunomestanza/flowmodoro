import { expect, test } from '@playwright/test'

test('should be able to finish an focus period with developer suggestion', async ({
  page,
}) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  const startFocusButton = page.getByRole('button', {
    name: 'Iniciar tempo de foco',
  })
  await expect(startFocusButton).toBeVisible()
  startFocusButton.click()

  const stopFocusButton = page.getByRole('button', {
    name: 'Finalizar tempo de foco',
  })
  await expect(stopFocusButton).toBeVisible()
  await page.waitForTimeout(5000)
  stopFocusButton.click()

  const startPauseButton = page.getByRole('button', {
    name: 'Iniciar tempo de pausa',
  })
  await expect(startPauseButton).toBeVisible()
  await expect(page.getByText('1').nth(3)).toBeVisible()
  await expect(page.getByText('Período de foco finalizado.')).toBeVisible()

  startPauseButton.click()
  await expect(page.getByText('Tempo de descanso finalizado.')).toBeVisible()
  await expect(startFocusButton).toBeVisible()
})

test('should be able to finish an focus period with zoe read bivens suggestion', async ({
  page,
}) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByLabel('Ativar sugestão de Zoe Read Bivens').click()

  const startFocusButton = page.getByRole('button', {
    name: 'Iniciar tempo de foco',
  })
  await expect(startFocusButton).toBeVisible()
  startFocusButton.click()

  const stopFocusButton = page.getByRole('button', {
    name: 'Finalizar tempo de foco',
  })
  await expect(stopFocusButton).toBeVisible()
  stopFocusButton.click()

  const startPauseButton = page.getByRole('button', {
    name: 'Iniciar tempo de pausa',
  })
  await expect(startPauseButton).toBeVisible()
  await expect(page.getByText('5').nth(1)).toBeVisible()
  await expect(page.getByText('0').nth(2)).toBeVisible()
  await expect(page.getByText('0').nth(3)).toBeVisible()
  await expect(page.getByText('Período de foco finalizado.')).toBeVisible()

  startPauseButton.click()
  await page
    .getByRole('button', {
      name: 'Finalizar tempo de pausa',
    })
    .click()
  await expect(page.getByText('Pausa finalizada antes do tempo.')).toBeVisible()
  await expect(startFocusButton).toBeVisible()
})

test('should be able to restart an pause period after stop it', async ({
  page,
}) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByLabel('Ativar sugestão de Zoe Read Bivens').click()

  const startFocusButton = page.getByRole('button', {
    name: 'Iniciar tempo de foco',
  })
  startFocusButton.click()

  const stopFocusButton = page.getByRole('button', {
    name: 'Finalizar tempo de foco',
  })
  stopFocusButton.click()

  const startPauseButton = page.getByRole('button', {
    name: 'Iniciar tempo de pausa',
  })

  startPauseButton.click()
  const finishPauseButton = page.getByRole('button', {
    name: 'Finalizar tempo de pausa',
  })

  await finishPauseButton.click()

  await page.getByRole('button', { name: 'Retomar pausa' }).click()
  await expect(finishPauseButton).toBeVisible()
  await expect(page.getByText('4').nth(1)).toBeVisible()

  await page.waitForTimeout(500)
})
