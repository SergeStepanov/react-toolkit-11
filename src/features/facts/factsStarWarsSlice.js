import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  facts: [
    { id: 1, factText: 'прообразом Чубакки стал пёс режиссёра;' },
    {
      id: 2,
      factText:
        'актёрам разрешили подобрать любимый цвет для своих световых мечей;',
    },
    {
      id: 3,
      factText:
        'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину;',
    },
    {
      id: 4,
      factText:
        'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу;',
    },
    {
      id: 5,
      factText:
        'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок;',
    },
  ],

  getFacts: null,
};

const factsSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {
    numberOfFacts: (state, action) => {
      if (Number(action.payload) < 1 || Number(action.payload) > 5)
        state.getFacts = null;
      state.getFacts = state.facts.slice(0, Number(action.payload));
    },
  },
});

export const { numberOfFacts } = factsSlice.actions;
export default factsSlice.reducer;
