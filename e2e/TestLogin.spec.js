describe('Show Login', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Should have login form', async () => {
    await expect(element(by.id('LoginForm'))).toBeVisible()
  })
})

describe('Try login no inputs', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Should show error message', async () => {
    await element(by.id('LoginButton')).tap()
    await expect(element(by.label('Authentication failed.'))).toBeVisible()
  })
})

describe('Try login with correct details', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Show show employee list', async () => {
    await element(by.id('UsernameInput')).typeText('test@test.com')
    await element(by.id('PasswordInput')).typeText('password')
    await element(by.id('LoginButton')).tap()
    await expect(element(by.id('EmployeeList'))).toBeVisible()
  })
})
