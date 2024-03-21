<template>
  <UCard>
    <div class="space-y-4">
      <UFormGroup label="Email" name="email">
        <UInput />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput type="password" />
      </UFormGroup>

      <UButton label="Login" color="gray" block />

      <UDivider label="OR" />

      <UButton
        color="black"
        label="Login with Google"
        icon="i-simple-icons-google"
        block
      />
      <CommonGoogleBtn />
    </div>
  </UCard>
</template>
