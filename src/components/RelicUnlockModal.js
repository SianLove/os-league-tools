import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NONE_RELIC_ID, PASSIVE_RELICS, RELICS } from '../data/relics';
import { updateRelic } from '../store/unlocks/unlocks';
import Modal from './Modal';

export default function RelicUnlockModal({ isOpen, setIsOpen, tier }) {
  const availableRelics = RELICS[tier] ?? [];
  const [selectedRelic, setSelectedRelic] = useState(0);
  const prevTierPassiveRelicData = tier !== NONE_RELIC_ID ? PASSIVE_RELICS[tier - 1] : null;
  const passiveRelicData = tier !== NONE_RELIC_ID ? PASSIVE_RELICS[tier] : PASSIVE_RELICS[0];
  const dispatch = useDispatch();

  const onSelectRelic = unlockTier => () => setSelectedRelic(unlockTier);

  const onConfirm = () => {
    dispatch(updateRelic({ tier, id: selectedRelic }));
    setIsOpen(false);
    setSelectedRelic(0);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={() => {}}
      className='w-[50rem] shadow shadow-primary rounded-md bg-primary-alt'
    >
      <Modal.Header className='text-center small-caps tracking-wide text-xl text-accent font-semibold'>
        Choose a relic to unlock
      </Modal.Header>
      <Modal.Body className='text-primary'>
        {passiveRelicData && (
          <div className='flex flex-col gap-1 m-4 text-center'>
            <span className='text-accent small-caps'>Passive unlocks</span>
            {passiveRelicData.exp.increased && (
              <span key='exp'>
                · Exp rates x{prevTierPassiveRelicData?.exp.multiplier ?? 1} → x{passiveRelicData.exp.multiplier}
              </span>
            )}
            {passiveRelicData.drops.increased && (
              <span key='drops'>
                · Drop rates x{prevTierPassiveRelicData?.drops.multiplier ?? 1} → x{passiveRelicData.drops.multiplier}
              </span>
            )}
            {passiveRelicData.minigames.increased && (
              <span key='minigames'>
                · Minigame points x{prevTierPassiveRelicData?.minigames.multiplier ?? 1} → x
                {passiveRelicData.minigames.multiplier}
              </span>
            )}
            {passiveRelicData.extras.map(extra => (
              <span key={extra}>· {extra}</span>
            ))}
            {!passiveRelicData.exp.increased &&
              !passiveRelicData.drops.increased &&
              !passiveRelicData.minigames.increased &&
              passiveRelicData.extras.length === 0 && <span key='none'>None</span>}
          </div>
        )}
        <div className='flex flex-col gap-2 m-4'>
          {availableRelics.map((relicData, index) => (
            <div
              className={`flex flex-row gap-4 p-2 cursor-pointer hover:bg-secondary-alt ${
                selectedRelic === index ? 'bg-secondary border-accent rounded' : ''
              }`}
              onClick={onSelectRelic(index)}
              key={index}
            >
              <div className='flex flex-col gap-2 justify-center'>
                <img className='max-w-[3rem]' src={relicData.icon} alt={relicData.label} />
              </div>
              <div>
                <p className='text-accent small-caps'>{relicData.label}</p>
                <div className='max-h-[200px] overflow-auto text-sm'>
                  {typeof relicData.description === 'string'
                    ? relicData.description
                    : relicData.description.map(line => <div key={line}>{line}</div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='m-2 mt-1 mb-4 flex justify-between text-sm'>
          <button className='w-40 button-outline' type='button' onClick={() => setIsOpen(false)}>
            Cancel
          </button>
          <button className='w-40 button-filled' type='button' onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
