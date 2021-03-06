// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react'

const SetLanguageContext = React.createContext<(lang: string) => void>(() => {})

export {SetLanguageContext}
