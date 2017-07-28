describe('Start App', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Should show login form', async () => {
    await expect(element(by.id('LoginForm'))).toBeVisible()
  })
})

describe('Try login with no inputs', () => {
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

  it('Shows employee list', async () => {
    await element(by.id('UsernameInput')).replaceText('test@test.com')
    await element(by.id('PasswordInput')).replaceText('password')
    await element(by.id('LoginButton')).tap()
    await expect(element(by.id('EmployeeList'))).toBeVisible()
  })
})

describe('Edit employee scene', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('Shows employee list', async () => {
    await element(by.id('UsernameInput')).typeText('test@test.com')
    await element(by.id('PasswordInput')).typeText('password')
    await element(by.id('LoginButton')).tap()
    await expect(element(by.id('EmployeeList'))).toBeVisible()
    await element(by.id('ListItem')).tap()
    await expect(element(by.id('EditEmployeeScene'))).toBeVisible()
  })
})
